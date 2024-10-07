<template>
    <div class="flex flex-col items-center">
        <div class="w-[50rem] border-2 border-indigo-500 rounded-xl flex flex-col items-center justify-center p-8 my-6 justify-center">
            <div class="flex justify-around w-[30rem]">
                <div class="flex flex-col items-center justify-center">
                    <p class="mr-4 text-xl text-bold">DISPOSITIF</p>
                    <Dropdown v-model="selectedDispositif" :options="dispositifs" optionLabel="name" placeholder="---- CHOISIR ----" />
                </div>
                <div class="flex flex-col items-center">
                    <p class="mr-4 text-xl text-bold">SEXE</p>
                    <Dropdown v-model="selectedSexe" :options="sexes" optionLabel="name" placeholder="---- CHOISIR ----" />
                </div>
            </div>

            <div class="w-[30rem] mt-12">
                <div class="flex justify-between items-center">
                    <label>Hauteur (en cm):</label>
                    <InputText type="number" class="!bg-gray-200 !text-black" v-model="hauteur" />
                </div>

                <div class="flex justify-between items-center mt-2">
                    <label>Tour de cuisse (en cm):</label>
                    <InputText type="number" class="!bg-gray-200 !text-black" v-model="tourDeCuisse" />
                </div>  

                <div class="flex justify-between items-center mt-2">
                    <label>Tour de cheville (en cm):</label>
                    <InputText type="number" class="!bg-gray-200 !text-black" v-model="tourDeCheville" />
                </div>
            </div>
        </div>

        <p v-if="results.length === 0">Aucun résultat trouvé.</p>

        <DataTable class="w-full" :value="results" :paginator="true" :rows="10" :rowsPerPageOptions="[5, 10, 20, 50, 100]" v-if="results.length > 0" :loading="loading">
            <Column sortable field="cheville_min" header="Tour cheville min"></Column>
            <Column sortable field="cheville_max" header="Tour cheville max"></Column>
            <!-- fields: mollet min et max, cuisse min et max, hanche max, taille, hauteur min et max, hauteur, dénomination -->
            <Column sortable field="cuisse_min" header="Tour cuisse min"></Column>
            <Column sortable field="cuisse_max" header="Tour cuisse max"></Column>
            <Column sortable field="hanche_max" header="Tour hanche max"></Column>
            <Column sortable field="taille" header="Taille"></Column>
            <Column sortable field="hauteur_min" header="Hauteur min"></Column>
            <Column sortable field="hauteur_max" header="Hauteur max"></Column>
            <Column sortable field="hauteur" header="Hauteur"></Column>
            <Column sortable field="denomination" header="Dénomination"></Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import axios from 'axios';

const selectedDispositif = ref();
const dispositifs = ref([
    { id: 1, name: 'CHAUSSETTES', value: 'CHAUSSETTES' },
    { id: 2, name: 'BAS', value: 'BAS' },
    { id: 3, name: 'COLLANT', value: 'COLLANT' },
    { id: 4, name: '-', value: null }
]);

const selectedSexe = ref();
const sexes = ref([
    { id: 1, name: 'FEMME', value: 'FEMME' },
    { id: 2, name: 'HOMME', value: 'HOMME' },
    { id: 3, name: '-', value: null }
]);

const hauteur = ref('');
const tourDeCuisse = ref('');
const tourDeCheville = ref('');

const results = ref([]);
const loading = ref(false);

const getFilteredResults = async () => {
    loading.value = true;
    try {
        const params: any = {};
        if (selectedSexe.value?.value) params.sexe = selectedSexe.value.value;
        if (selectedDispositif.value?.value) params.dispositif = selectedDispositif.value.value;
        if (hauteur.value !== '') params.hauteur_max = hauteur.value;
        if (tourDeCuisse.value !== '') params.cuisse_max = tourDeCuisse.value;
        if (tourDeCheville.value !== '') params.cheville_max = tourDeCheville.value;

        const response = await axios.get('http://localhost:4001/api/global/filter', { params });
        results.value = response.data;
    } catch (e) {
        console.log('Erreur lors de la récupération des résultats :', e);
    } finally {
        loading.value = false;
    }
};

watch([selectedSexe, selectedDispositif, hauteur, tourDeCuisse, tourDeCheville], () => {
    getFilteredResults();
});

onMounted(() => {
    getFilteredResults();
});
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="w-[50rem] border-2 border-indigo-500 rounded-xl flex flex-col items-center justify-center p-8 my-6">
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

        <DataTable class="w-full" :value="results" :paginator="true" :rows="10" :rowsPerPageOptions="[5, 10, 20, 50, 100]" v-if="results.length > 0">
            <Column sortable field="CHEVILLE MIN" header="Tour cheville min"></Column>
            <Column sortable field="CHEVILLE MAX" header="Tour cheville max"></Column>
            <Column sortable field="CUISSE MIN" header="Tour cuisse min"></Column>
            <Column sortable field="CUISSE MAX" header="Tour cuisse max"></Column>
            <Column sortable field="HANCHE MAX" header="Tour hanche max"></Column>
            <Column sortable field="TAILLE" header="Taille"></Column>
            <Column sortable field="HAUTEUR MIN" header="Hauteur min"></Column>
            <Column sortable field="HAUTEUR MAX" header="Hauteur max"></Column>
            <Column sortable field="HAUTEUR" header="Hauteur"></Column>
            <Column sortable field="DENOMINATION" header="Dénomination"></Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import type { DbItem } from '../types/dbType';

const db = ref<DbItem[]>([]);

const fetchDb = async () => {
    try {
        const response = await fetch('./db.json');
        db.value = await response.json();
    } catch (error) {
        console.error('Erreur lors du chargement de db.json :', error);
    }
};

const selectedDispositif = ref();
const dispositifs = ref([
    { id: 1, name: 'CHAUSSETTES', value: 'CHAUSSETTES' },
    { id: 2, name: 'BAS', value: 'BAS' },
    { id: 3, name: 'COLLANT', value: 'COLLANT' },
    { id: 4, name: '-', value: null },
]);

const selectedSexe = ref();
const sexes = ref([
    { id: 1, name: 'FEMME', value: 'FEMME' },
    { id: 2, name: 'HOMME', value: 'HOMME' },
    { id: 3, name: '-', value: null },
]);

const hauteur = ref('');
const tourDeCuisse = ref('');
const tourDeCheville = ref('');

const results = ref([]);
const loading = ref(false);

const filterResults = () => {
    loading.value = true;

    results.value = db.value.filter((item) => {
        const matchesDispositif = selectedDispositif.value?.value ? item.DISPOSITIF === selectedDispositif.value.value : true;
        const matchesSexe = selectedSexe.value?.value ? item.SEXE === selectedSexe.value.value : true;
        const matchesHauteur =
            hauteur.value !== ''
                ? parseFloat(item['HAUTEUR MAX']) >= parseFloat(hauteur.value) && parseFloat(item['HAUTEUR MIN']) <= parseFloat(hauteur.value)
                : true;
        const matchesCuisse =
            tourDeCuisse.value !== ''
                ? parseFloat(item['CUISSE MAX']) >= parseFloat(tourDeCuisse.value) && parseFloat(item['CUISSE MIN']) <= parseFloat(tourDeCuisse.value)
                : true;
        const matchesCheville =
            tourDeCheville.value !== ''
                ? parseFloat(item['CHEVILLE MAX']) >= parseFloat(tourDeCheville.value) && parseFloat(item['CHEVILLE MIN']) <= parseFloat(tourDeCheville.value)
                : true;

        return matchesDispositif && matchesSexe && matchesHauteur && matchesCuisse && matchesCheville;
    }) as any;

    loading.value = false;
};

watch([selectedDispositif, selectedSexe, hauteur, tourDeCuisse, tourDeCheville], filterResults);

onMounted(async () => {
    await fetchDb();
    filterResults();
});
</script>

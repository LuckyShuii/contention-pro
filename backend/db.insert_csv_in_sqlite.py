import sqlite3
import csv

conn = sqlite3.connect('contention_pro.sqlite')
cursor = conn.cursor()

def format_key(key):
    return key.lower().replace(' ', '_')

with open('db.csv', 'r') as file:
    csv_reader = csv.DictReader(file)
    
    for row in csv_reader:
        formatted_row = {format_key(k): v for k, v in row.items()}
        cursor.execute('''
            INSERT INTO global (
                dispositif, sexe, marque, cheville_min, cheville_max, mollet_min, mollet_max, cuisse_min, cuisse_max, 
                hanche_max, taille, hauteur_min, hauteur_max, hauteur, denomination
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            formatted_row['dispositif'], formatted_row['sexe'], formatted_row['marque'], formatted_row['cheville_min'], 
            formatted_row['cheville_max'], formatted_row['mollet_min'], formatted_row['mollet_max'], formatted_row['cuisse_min'], 
            formatted_row['cuisse_max'], formatted_row['hanche_max'], formatted_row['taille'], formatted_row['hauteur_min'], 
            formatted_row['hauteur_max'], formatted_row['hauteur'], formatted_row['denomination']
        ))

conn.commit()
conn.close()

print("Données importées avec succès !")

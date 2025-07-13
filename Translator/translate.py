import json
from deep_translator import GoogleTranslator

# Stel vertaler in
translator = GoogleTranslator(source='en', target='nl')

# Laad het originele bestand
with open("./Translator/table_en.json", "r", encoding="utf-8") as f:
    data = json.load(f)
print("Origineel bestand geladen.")
# Velden die we willen vertalen
velden = ["name", "summary", "category", "appearance", "phase"]

for element in data["elements"]:
    for veld in velden:
        if veld in element and element[veld]:
            try:
                element[veld] = translator.translate(element[veld])
                print(f"Vertaling van {veld} voor {element.get('name')} voltooid.")
            except Exception as e:
                print(f"Fout bij vertalen van {veld} van element {element.get('name')}: {e}")

# Opslaan als nieuw bestand
with open("./src/data/PeriodicTable_nl.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Vertaling voltooid! Bestand opgeslagen als PeriodicTable_nl.json")

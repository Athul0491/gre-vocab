import requests
import json
def get_page(url,freq):
    response = requests.get(url)
    text= response.json()[0]
    res = {
        "word": text["word"],
        "phonetics": text["phonetics"],
        "meanings": [{"partOfSpeech": meaning["partOfSpeech"], "definition": meaning["definitions"][0]["definition"]}
            for meaning in text["meanings"]],
        "frequency": freq
    }
    return json.dumps(res)

def write_file():
    f = open("./src/assets/barrons333.json")
    data = json.load(f)
    w = []
    for i in data:
        print(i["word"])
        w.append(get_page('https://api.dictionaryapi.dev/api/v2/entries/en/'+i["word"],i["frequency"]))

    with open("./src/assets/barrons.json", "w") as outfile:
        json.dump(w, outfile)


print(write_file())
# print(get_page('https://api.dictionaryapi.dev/api/v2/entries/en/abate'))
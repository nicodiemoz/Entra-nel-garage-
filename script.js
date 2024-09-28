# Funzione per calcolare se il veicolo entra nel garage
def verifica_accesso_garage():
    try:
        # Input delle variabili
        passo = float(input("Inserisci la lunghezza del passo del veicolo in cm: "))
        altezza_veicolo = float(input("Inserisci l'altezza del veicolo in cm: "))
        altezza_garage = float(input("Inserisci l'altezza del garage in cm: "))
        pendenza_rampa = float(input("Inserisci la pendenza della rampa in percentuale (%): "))

        # Conversione della pendenza in angolo in gradi
        angolo_rampa = (pendenza_rampa / 100.0)
        
        # Calcolo dell'altezza massima raggiunta dal veicolo sulla rampa
        altezza_massima_veicolo = altezza_veicolo + (passo * angolo_rampa)

        # Verifica se l'altezza massima del veicolo è inferiore all'altezza del garage
        if altezza_massima_veicolo < altezza_garage:
            print("Il veicolo può entrare nel garage senza problemi!")
        else:
            print("Attenzione! Il veicolo potrebbe urtare il soffitto del garage.")
    except ValueError:
        print("Errore: Inserisci valori numerici validi per tutte le misure.")

# Esecuzione della funzione
verifica_accesso_garage()

function verificaPassaggio() {
    // Ottieni i valori inseriti dall'utente
    const passo = parseFloat(document.getElementById('passo').value) || 0;
    const altezzaVeicolo = parseFloat(document.getElementById('altezzaVeicolo').value) || 0;
    const angoloRampa = parseFloat(document.getElementById('angoloRampa').value) || 10;
    const altezzaSoffitto = parseFloat(document.getElementById('altezzaSoffitto').value) || 380;

    // Conversione dell'angolo della rampa in radianti
    const pendenzaRadianti = angoloRampa * Math.PI / 180;

    // Calcolo dell'altezza della parte anteriore del veicolo al punto di transizione
    const altezzaFronte = altezzaVeicolo + (passo * Math.sin(pendenzaRadianti));

    // Verifica se l'altezza del veicolo al punto di transizione è minore o uguale all'altezza del soffitto
    const risultato = altezzaFronte <= altezzaSoffitto
        ? "L'auto passa nel garage."
        : "L'auto NON passa nel garage.";

    // Visualizza il risultato
    document.getElementById('risultato').textContent = risultato;
}

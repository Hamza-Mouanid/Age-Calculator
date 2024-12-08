function calculerAge() {
    const dateNaissance = document.getElementById("dateNaissance").value;

    const aujourdHui = new Date();
    const naissance = new Date(dateNaissance);

    let ageAnnees = aujourdHui.getFullYear() - naissance.getFullYear();
    let moisDiff = aujourdHui.getMonth() - naissance.getMonth();
    let joursDiff = aujourdHui.getDate() - naissance.getDate();

    if (moisDiff < 0 || (moisDiff === 0 && joursDiff < 0)) {
        ageAnnees--;
    }

    // alert(ageAnnees);
    document.getElementById("ageEnAnnees").value = ageAnnees;

    agemois=moisDiff;
    agejour=joursDiff;

    if(joursDiff<0){
        agemois--;
        agejour += new Date(aujourdHui.getFullYear(), aujourdHui.getMonth(), 0).getDate();
        }


    if(moisDiff<0){
        agemois = 12 + moisDiff;
    }

    

    document.getElementById("ageComplet").value =
        `${ageAnnees} ans, ${agemois} mois, ${agejour} jours`;

}
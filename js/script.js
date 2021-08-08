window.onload = () => {

    let joueuractif = "1";
    document.querySelector(".bip").addEventListener("click", checkpass);

    let zones = document.querySelectorAll(".bip");
    let nbrShoot = zones.length - 1;
    console.log("ilreste shoot : ", nbrShoot);

    zones.forEach(element => {
        element.addEventListener('click', checkpass)
    });

    document.querySelector(".shoot").innertext = nbrShoot;

    console.log("ici c'est la zone : ", zones);





    function checkpass() {

        let unautre = this.classList;
        console.log(unautre);

        let maColonne = unautre[3].slice(3);
        console.log("maColonne", maColonne);

        let maLigne = unautre[2];
        console.log("maLigne", maLigne);

        let lastshoot = document.querySelector(".shoot");

        document.querySelector(".shoot").innertext = nbrShoot;

        lastshoot.textContent = (808 - nbrShoot) + "/ 808";
        console.log("lastshoot", lastshoot.textContent);





        if (unautre[1] == "trait") {

            console.log("c'est un trait");
            // -------------------  partie superieur  ----------------------

            // preparation des variables
            // variable ligne clicquable superieur ligne actuel - 2
            let ligneDessus = (unautre[2].slice(4)) - 2;
            let maColonne = (unautre[3].slice(3));

            let verticauxGauche = unautre[3] - 1;
            let verticauxDroit = unautre[3] + 1;
            let ligneDecell = unautre[2] - 1;
            if (ligneDessus <= 1) {
                ligneDessus = 1;
                // si le clique etait déjà sur ligne 1 alors ligne dessus = 1
            }
            console.log("ligneDessus", ligneDessus);


            //si ligne superieur != 1
            if (ligneDessus !== 1) {
                let elementGauchevar = `.line.trait.line${ligneDessus}.col${maColonne}.bip`;
                //detection couleur ==coul0== si = coul0 alors injection coul{joueurActif}----
                elementGauche = document.querySelector(elementGauchevar);
                console.log("------ ", elementGauche);

                // elementGauche.classList.replace("coul0", "coul3");  // cette ligne est à conserver ! ! ! 

                console.log("elementGauchevar", elementGauchevar);
                console.log("elementGauche", elementGauche);
                let elementDessus;



                if (joueuractif == 1) {
                    joueuractif = 0;
                    this.classList.replace("coul0", "coul1");
                    nbrShoot--;
                } else {
                    joueuractif = 1;
                    this.classList.replace("coul0", "coul2");
                    nbrShoot--;
                }

            }
            // ligneDessus == 1 alors je sors ----- :)

            // -------------------  partie inferieur  ----------------------

        }






















        /****************************************************************** */
        // if (unautre[5] !== "coul0") {
        //     console.log("merdasse ", unautre[5]);

        //     if (joueuractif == 1) {
        //         joueuractif = 0;
        //             this.classList.replace("coul0", "coul1");
        //     } else{
        //         joueuractif = 1;
        //             this.classList.replace("coul0", "coul2");

        //     }
        //faux*******************
        // }else{
        //     if()
        // }
        /*********************************************************************** */


















        // console.log("traitdessus ",traitdessus);

        // let decomposer;
        // let brouette = Number(unautre[2]);
        // console.log("chouette ", brouette);

        // decomposer = unautre[5].slice(4);

        // let traitdessus = Number(unautre[2] - 2);

        // if (traitdessus >= 1) {
        //     console.log("traitdessus ", traitdessus);
        // }else{
        //     traitdessus= 1
        //     console.log("nouveau traitdessus ", traitdessus);
        // }

        // let zonesup = document.querySelectorAll(".bip ");

        // console.log("unautre 5 : ", decomposer);


        if (unautre[1] == "bloc") {
            console.log("c'est un block");
            // console.log(unautre[0]);
            console.log(unautre[1]);
            console.log(unautre[2]);
            console.log(unautre[3]);
            console.log(unautre[4]);
            console.log(unautre[5]);
        }

    }

}
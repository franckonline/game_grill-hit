window.onload = () => {

    let joueuractif = "1";
    document.querySelector(".bip").addEventListener("click", checkpass);
    let scorePlayerA = 5;
    let scorePlayerB = 5;
    let cadrePlayerA = document.querySelector(".playerA");
    let cadrePlayerB = document.querySelector(".playerB");



    console.log("cadrePlayerA: ", cadrePlayerA);
    console.log("cadrePlayerB: ", cadrePlayerB);

    let zones = document.querySelectorAll(".bip");
    let nbrShoot = zones.length - 1;
    // console.log("ilreste shoot : ", nbrShoot);

    zones.forEach(element => {
        element.addEventListener('click', checkpass)
    });

    document.querySelector(".shoot").innertext = nbrShoot;
    console.log("ici c'est la zone : ", zones);





    function checkpass() {

        let unautre = this.classList;
        console.log("unautre >>> ", unautre);

        let maColonne = unautre[2].slice(3);
        console.log("maColonne", maColonne);

        let maLigne = unautre[1];
        console.log("maLigne", maLigne);

        let lastshoot = document.querySelector(".shoot");

        document.querySelector(".shoot").innertext = nbrShoot;

        lastshoot.textContent = (808 - nbrShoot) + "/ 808";
        console.log("lastshoot", lastshoot.textContent);





        if (unautre[0] == "trait") {

            console.log("c'est un trait");
            // -------------------  partie superieur  ----------------------

            // preparation des variables
            // variable ligne clicquable superieur ligne actuel - 2
            let ligneDessus = (unautre[1].slice(4)) - 2;
            let maColonne = (unautre[2].slice(3));
            console.log("maColonne >> ", maColonne);
            let verticauxGauche = unautre[2] - 1;
            let verticauxDroit = unautre[2] + 1;
            let ligneDecell = unautre[1] - 1;
            if (ligneDessus <= 1) {
                ligneDessus = 1;
                // si le clique etait déjà sur ligne 1 alors ligne dessus = 1
            }
            console.log("ligneDessus", ligneDessus);


            //si ligne superieur != 1
            if (ligneDessus !== 1) {
                let elementGauchevar = `.trait.line${ligneDessus}.col${maColonne}.bip`;
                //detection couleur ==coul0== si = coul0 alors injection coul{joueurActif}----
                elementGauche = document.querySelector(elementGauchevar);
                console.log("------ ", elementGauche);
                // -----------------------cette ligne est à conserver ! ! !------------------
                elementGauche.classList.replace("coul0", "coul3");  

                console.log("elementGauchevar", elementGauchevar);
                console.log("elementGauche", elementGauche);
                let elementDessus = elementGauche.textContent;
                console.log("elementDessus >>", elementDessus);


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

        if (scorePlayerA === scorePlayerB) {
            cadrePlayerA.style.color = "red";
            cadrePlayerB.style.color = "red";
        }
        if (scorePlayerA > scorePlayerB) {
            cadrePlayerA.style.color = "green";
            cadrePlayerB.style.color = "red";
        }
        if (scorePlayerA < scorePlayerB) {
            cadrePlayerB.style.color = "green";
            cadrePlayerA.style.color = "red";
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




        if (unautre[0] == "bloc") {
            console.log("c'est un block");
            console.log(unautre);

            console.log(unautre[0]);
            console.log(unautre[1]);
            console.log(unautre[2]);
            console.log(unautre[3]);
            console.log(unautre[4]);
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


        cadrePlayerA.textContent = scorePlayerA;
        cadrePlayerB.textContent = scorePlayerB;
    }

}
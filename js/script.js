window.onload = () => {
    let joueuractif = "1";
    document.querySelector(".bip").addEventListener("click", checkpass);
    let scorePlayerA = 0;
    let scorePlayerB = 0;
    let cadrePlayerA = document.querySelector(".playerA");
    let cadrePlayerB = document.querySelector(".playerB");
    // console.log("cadrePlayerA: ", cadrePlayerA);
    // console.log("cadrePlayerB: ", cadrePlayerB);
    let zones = document.querySelectorAll(".bip");
    let nbrShoot = zones.length - 1;

    zones.forEach(element => {
        element.addEventListener('click', checkpass)
    });
    document.querySelector(".shoot").innertext = nbrShoot;

    function checkpass() {
        let checksum1 = 0;
        let checksum2 = 0;
        changeplayers();
        let unautre = this.classList;
        let typetrait = unautre[0];
        let maCouleurClic = Number(unautre[4].slice(4));
        let colonne = Number(unautre[2].slice(3));
        let Ligne = Number(unautre[1].slice(4));
        let lignemoins = Ligne - 1;
        let lignemoinsmoins = Ligne - 2;
        let ligneplus = Ligne + 1;
        let ligneplusplus = Ligne + 2;
        let colonneplus = colonne + 1;
        let colonnemoins = colonne - 1;
        let passbloc_sup_inf = 0;

        ///////******************************************************//////////////

        console.log("le bip cliqué ", unautre);
        function controltraitsup() {
            checksum1 = 0;
            // mode = trait
            console.log("init check1 ");
            let bipunstring = `.bloc.line${lignemoins}.col${colonnemoins}`;
            let bipun = document.querySelector(bipunstring);
            console.log("couleur sup gauche ", Number(bipun.classList[4].slice(4)));
            if (Number(bipun.classList[4].slice(4)) >= 1) {
                checksum1 = checksum1 + 1;
            }
            console.log("valeur check1 sup gauche", checksum1);

            // capture    du trait sup
            let bipdeuxstring = `.trait.line${lignemoinsmoins}.col${colonne}`;
            let bipdeux = document.querySelector(bipdeuxstring);
            console.log("couleur trait sup ", Number(bipdeux.classList[4].slice(4)));
            if (Number(bipdeux.classList[4].slice(4)) >= 1) {
                checksum1 = checksum1 + 1;
            }

            // capture  du trait sup droite
            let biptroisstring = `.bloc.line${lignemoins}.col${colonneplus}`;
            let biptrois = document.querySelector(biptroisstring);
            console.log("valeur check1 sup droite", checksum1);
            console.log("couleur trait sup droite ", Number(biptrois.classList[4].slice(4)));
            if (Number(biptrois.classList[4].slice(4)) >= 1) {
                checksum1 = checksum1 + 1;
            }
            console.log("number du sup droite  ", checksum1);
            console.log("valeur tot sup check_", checksum1);

            if (checksum1 == 3) {
                console.log("dedans checksum1 sup controle_", checksum1);
                checksum1 = 0;
                // console.log("je check");
                let cellulesupstring = `.bloc.line${lignemoins}.col${colonne}.cell`;
                celluledessus = document.querySelector(cellulesupstring);
                // console.log("cell de dessus == ", celluledessus);

                if (joueuractif === 1) {
                    celluledessus.style.backgroundColor = "red";
                    scorePlayerA++;
                    passbloc_sup_inf = 1;
                } else {
                    celluledessus.style.backgroundColor = "blue";
                    scorePlayerB++;
                    // passbloc_sup_inf = 1;
                }

                // changeplayers();

            }

        }

        function controltraitinf() {
            console.log("deuxieme checksum_2 ", checksum2);

            // mode = trait

            // capture  du trait inf droite
            let bipquatrestring = `.bloc.line${ligneplus}.col${colonneplus}`;
            let bipquatre = document.querySelector(bipquatrestring);
            console.log("bipquatre ", bipquatre);
            console.log("couleur trait inf droite ", Number(bipquatre.classList[4].slice(4)));
            if (Number(bipquatre.classList[4].slice(4)) >= 1) {
                checksum2 = checksum2 + 1;
            }
            console.log("number du inf droite  ", checksum2);

            // capture    du trait inf
            let bipcinqstring = `.trait.line${ligneplusplus}.col${colonne}`;
            let bipcinq = document.querySelector(bipcinqstring);
            console.log("couleur trait inferieur ", Number(bipcinq.classList[4].slice(4)));
            if (Number(bipcinq.classList[4].slice(4)) >= 1) {
                checksum2 = checksum2 + 1;
            }
            console.log("number du inferieur  ", checksum2);

            // capture  du trait sup droite
            let bipsixstring = `.bloc.line${ligneplus}.col${colonnemoins}`;
            let bipsix = document.querySelector(bipsixstring);
            console.log("couleur trait inf gauche ", Number(bipsix.classList[4].slice(4)));
            if (Number(bipsix.classList[4].slice(4)) >= 1) {
                checksum2 = checksum2 + 1;
            }
            console.log("number du inf gauche  ", checksum2);
            console.log("valeur tot sup check2_", checksum2);

            if (checksum2 === 3) {
                console.log("check2 me passe dans checksum2 === 3 ");
                checksum2 = 0;
                console.log("je check_22");
                let celluleinfstring = `.bloc.line${ligneplus}.col${colonne}.cell`;
                celluledessous = document.querySelector(celluleinfstring);
                console.log("cell de dessous == ", celluledessous);
                celluledessous.style.backgroundColor = "pink";

                if (joueuractif === 1) {
                    celluledessous.style.backgroundColor = "red";
                    scorePlayerA++;
                    passbloc_sup_inf = 1;
                } else {
                    celluledessous.style.backgroundColor = "blue";
                    scorePlayerB++;
                    passbloc_sup_inf = 1;
                }

                changeplayers();
               

            }
        }


        if (typetrait == "trait" && maCouleurClic < 1) {
            this.classList.replace("coul0", `coul${joueuractif}`);
            console.log("deuxieme checksum_2 ", checksum2);

            // mode = trait

                        // console.log("couleur >coul0 : ");
            if (Ligne > 1 && Ligne < 33) {
                controltraitsup();
                controltraitinf();
            }
            if (Ligne === 1) {
                controltraitinf();
            }
            if (Ligne === 33) {
                controltraitsup();
            }

        } //(typetrait == "trait" && maCouleurClic < 1)----fin

        if (typetrait == "bloc") {

            this.classList.replace("coul0", `coul${joueuractif}`);

            // console.log("couleur >coul0 : ");
            if (colonne > 1 && colonne < 49) {
                controltraitsup();
                controltraitinf();
            }
            if (colonne === 1) {
                controltraitinf();
            }
            if (colonne === 49) {
                controltraitsup();

            }

        }
        let lastshoot = document.querySelector(".shoot");
        document.querySelector(".shoot").innertext = nbrShoot;
        lastshoot.textContent = (808 - nbrShoot) + "/ 808";

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

        cadrePlayerA.textContent = scorePlayerA;
        cadrePlayerB.textContent = scorePlayerB;

        function changeplayers() {
            if (joueuractif == 1) {
                joueuractif = 2
            } else {
                joueuractif = 1;
            }
        }
    }
}
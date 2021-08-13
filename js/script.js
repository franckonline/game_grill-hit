window.onload = () => {
    let joueuractif = "1";
    function changeplayers() {
        if (joueuractif == 1) {
            joueuractif = 2;
        } else {
            joueuractif = 1;
        }
    }
    let paschanger = 0;
    document.querySelector(".bip").addEventListener("click", checkpass);
    let scorePlayerA = 0;
    let scorePlayerB = 0;
    let cadrePlayerA = document.querySelector(".playerA");
    let cadrePlayerB = document.querySelector(".playerB");

    let zones = document.querySelectorAll(".bip");
    zones.forEach(element => {
        element.addEventListener('click', checkpass)
    });

    function checkpass() {
        console.log("passage en keepass");
        paschanger = 0;
        let checksum1 = 0;
        let checksum2 = 0;
        let unautre = this.classList;
        if (unautre[4] != "coul0") {
            alert("Attention déjà cliqué");
        }
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
        ///////******************************************************//////////////
        if (unautre[0] = "trait") {
            if (typetrait == "trait" && maCouleurClic < 1) {
                this.classList.replace("coul0", `coul${joueuractif}`);
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
            }
            
            function controltraitsup() {
                checksum1 = 0;
                let bipunstring = `.bloc.line${lignemoins}.col${colonnemoins}`;
                let bipun = document.querySelector(bipunstring);
                if (Number(bipun.classList[4].slice(4)) >= 1) {
                    checksum1 = checksum1 + 1;
                }
                let bipdeuxstring = `.trait.line${lignemoinsmoins}.col${colonne}`;
                let bipdeux = document.querySelector(bipdeuxstring);
                if (Number(bipdeux.classList[4].slice(4)) >= 1) {
                    checksum1 = checksum1 + 1;
                }
                let biptroisstring = `.bloc.line${lignemoins}.col${colonneplus}`;
                let biptrois = document.querySelector(biptroisstring);
                if (Number(biptrois.classList[4].slice(4)) >= 1) {
                    checksum1 = checksum1 + 1;
                }
                if (checksum1 == 3) {
                    checksum1 = 0;
                    paschanger = 1;
                    let cellulesupstring = `.bloc.line${lignemoins}.col${colonne}.cell`;
                    celluledessus = document.querySelector(cellulesupstring);
                    if (joueuractif === 1) {
                        celluledessus.style.backgroundColor = "red";
                        scorePlayerA++;
                    } else {
                        celluledessus.style.backgroundColor = "blue";
                        scorePlayerB++;
                    }
                }
            }

            function controltraitinf() {
                let bipquatrestring = `.bloc.line${ligneplus}.col${colonneplus}`;
                let bipquatre = document.querySelector(bipquatrestring);
                if (Number(bipquatre.classList[4].slice(4)) >= 1) {
                    checksum2 = checksum2 + 1;
                }
                let bipcinqstring = `.trait.line${ligneplusplus}.col${colonne}`;
                let bipcinq = document.querySelector(bipcinqstring);
                if (Number(bipcinq.classList[4].slice(4)) >= 1) {
                    checksum2 = checksum2 + 1;
                }
                let bipsixstring = `.bloc.line${ligneplus}.col${colonnemoins}`;
                let bipsix = document.querySelector(bipsixstring);
                if (Number(bipsix.classList[4].slice(4)) >= 1) {
                    checksum2 = checksum2 + 1;
                }
                if (checksum2 === 3) {
                    paschanger = 1;
                    checksum2 = 0;
                    let celluleinfstring = `.bloc.line${ligneplus}.col${colonne}.cell`;
                    celluledessous = document.querySelector(celluleinfstring);
                    if (joueuractif === 1) {
                        celluledessous.style.backgroundColor = "red";
                        scorePlayerA++;
                    } else {
                        celluledessous.style.backgroundColor = "blue";
                        scorePlayerB++;
                    }
                }
            }
        }
        /**
         *  ****************  bloc ********************
         */
        if (typetrait == "bloc") {
            this.classList.replace("coul0", `coul${joueuractif}`);
        }

        //gestion du shoot-------------------------------------
        let lastshoot = document.querySelector(".shoot");
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
        if (paschanger == 0) {
            changeplayers();
        }
        paschanger = 0;
    }// fin zone keepass
}
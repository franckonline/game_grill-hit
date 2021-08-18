window.onload = () => {
    let joueuractif = "1";

    document.querySelector(".shoot").textContent = 195;

    function changeplayers() {
        if (joueuractif == 1) {
            joueuractif = 2;
            cadrePlayerAbefore.style.transform = "scale(.9)";
            cadrePlayerAbefore.style.border = "red solid 2px";
            cadrePlayerBbefore.style.transform = "scale(1)";
            cadrePlayerBbefore.style.border = "white solid 2px";
        } else {
            joueuractif = 1;
            cadrePlayerAbefore.style.transform = "scale(1)";
            cadrePlayerAbefore.style.border = "white solid 2px";
            cadrePlayerBbefore.style.transform = "scale(.9)";
            cadrePlayerBbefore.style.border = "blue solid 2px";
        }
    }
    ////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////
    let paschanger = 0;
    document.querySelector(".bip").addEventListener("click", checkpass);
    let scorePlayerA = 0;
    let scorePlayerB = 0;
    let cadrePlayerA = document.querySelector(".playerA");
    let winp1 = document.querySelector(".winp1");
    let cadrePlayerAbefore = document.querySelector(".playerA", '::before');
    let cadrePlayerBbefore = document.querySelector(".playerB", '::before');
    let cadrePlayerB = document.querySelector(".playerB");
    let tir = 0;
    let zones = document.querySelectorAll(".bip");
    zones.forEach(element => {
        element.addEventListener('click', checkpass);
    });
    //------------------++++++++++++++++---------------------------


    function checkpass() {
        console.clear();
        console.log("------ ", tir);
        let unautre = this.classList;
        paschanger = 0;
        let checksum1 = 0;
        let checksum2 = 0;
        let checksum3 = 0;
        let checksum4 = 0;
        if (unautre[4] != "coul0") {
            changeplayers();
        }
        let typetrait = unautre[0];
        let maCouleurClic = Number(unautre[4].slice(4));
        let colonne = Number(unautre[2].slice(3));
        let ligne = Number(unautre[1].slice(4));
        let lignemoins = ligne - 1;
        let lignemoinsmoins = ligne - 2;
        let ligneplus = ligne + 1;
        let ligneplusplus = ligne + 2;
        let colonneplus = colonne + 1;
        let colonneplusplus = colonne + 2;
        let colonnemoins = colonne - 1;
        let colonnemoinsmoins = colonne - 2;
        if (maCouleurClic < 1) {
            tir++;
            document.querySelector(".shoot").textContent = "tir : " + (195 - tir);
            if (unautre[0] == "horizon") {
                this.classList.replace("coul0", `coul${joueuractif}`);
                if (ligne > 1 && ligne < 16) {
                    controltraitsup();
                    controltraitinf();
                }
                if (ligne === 1) {
                    controltraitinf();
                }
                if (ligne === 17) {
                    controltraitsup();
                }

                function controltraitsup() {
                    checksum1 = 0;
                    let bipunstring = `.line${lignemoins}.col${colonnemoins}`;
                    let bipun = document.querySelector(bipunstring);
                    if (Number(bipun.classList[4].slice(4)) >= 1) {
                        checksum1 = checksum1 + 1;
                    }
                    let bipdeuxstring = `.line${lignemoinsmoins}.col${colonne}`;
                    let bipdeux = document.querySelector(bipdeuxstring);
                    if (Number(bipdeux.classList[4].slice(4)) >= 1) {
                        checksum1 = checksum1 + 1;
                    }
                    let biptroisstring = `.line${lignemoins}.col${colonneplus}`;
                    let biptrois = document.querySelector(biptroisstring);
                    if (Number(biptrois.classList[4].slice(4)) >= 1) {
                        checksum1 = checksum1 + 1;
                    }
                    if (checksum1 == 3) {
                        checksum1 = 0;
                        paschanger = 1;
                        let cellulesupstring = `.line${lignemoins}.col${colonne}.cell`;
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
                    let bipquatrestring = `.line${ligneplus}.col${colonneplus}`;
                    let bipquatre = document.querySelector(bipquatrestring);
                    if (Number(bipquatre.classList[4].slice(4)) >= 1) {
                        checksum2 = checksum2 + 1;
                    }
                    let bipcinqstring = `.line${ligneplusplus}.col${colonne}`;
                    let bipcinq = document.querySelector(bipcinqstring);
                    if (Number(bipcinq.classList[4].slice(4)) >= 1) {
                        checksum2 = checksum2 + 1;
                    }
                    let bipsixstring = `.line${ligneplus}.col${colonnemoins}`;
                    let bipsix = document.querySelector(bipsixstring);
                    if (Number(bipsix.classList[4].slice(4)) >= 1) {
                        checksum2 = checksum2 + 1;
                    }
                    if (checksum2 === 3) {
                        paschanger = 1;
                        checksum2 = 0;
                        let celluleinfstring = `.line${ligneplus}.col${colonne}.cell`;
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
            if (typetrait == "vertical") {
                this.classList.replace("coul0", `coul${joueuractif}`);
                if (colonne > 1 && colonne < 22) {
                    controlblocgauche();
                    controlblocdroite();
                }
                if (colonne === 1) {
                    controlblocdroite();
                }
                if (colonne === 23) {
                    controlblocgauche();
                }

                function controlblocgauche() {
                    let bipsevenstring = `.line${ligneplus}.col${colonnemoins}`;
                    let bipseven = document.querySelector(bipsevenstring);
                    if (Number(bipseven.classList[4].slice(4)) >= 1) {
                        checksum3 = checksum3 + 1;
                    }
                    let bipeightstring = `.line${ligne}.col${colonnemoinsmoins}`;
                    let bipeight = document.querySelector(bipeightstring);
                    if (Number(bipeight.classList[4].slice(4)) >= 1) {
                        checksum3 = checksum3 + 1;
                    }
                    let bipninestring = `.line${lignemoins}.col${colonnemoins}`;
                    let bipnine = document.querySelector(bipninestring);
                    if (Number(bipnine.classList[4].slice(4)) >= 1) {
                        checksum3 = checksum3 + 1;
                    }
                    if (checksum3 === 3) {
                        paschanger = 1;
                        checksum3 = 0;
                        let cellulegauchestring = `.line${ligne}.col${colonnemoins}.cell`;
                        let cellulegauche = document.querySelector(cellulegauchestring);
                        if (joueuractif === 1) {
                            cellulegauche.style.backgroundColor = "red";
                            scorePlayerA++;
                        } else {
                            cellulegauche.style.backgroundColor = "blue";
                            scorePlayerB++;
                        }
                    }
                }

                function controlblocdroite() {
                    let biptenstring = `.line${lignemoins}.col${colonneplus}`;
                    let bipten = document.querySelector(biptenstring);
                    if (Number(bipten.classList[4].slice(4)) >= 1) {
                        checksum4 = checksum4 + 1;
                    }
                    let bipelevenstring = `.line${ligne}.col${colonneplusplus}`;
                    let bipeleven = document.querySelector(bipelevenstring);
                    if (Number(bipeleven.classList[4].slice(4)) >= 1) {
                        checksum4 = checksum4 + 1;
                    }
                    let biptwelvestring = `.line${ligneplus}.col${colonneplus}`;
                    let biptwelve = document.querySelector(biptwelvestring);
                    if (Number(biptwelve.classList[4].slice(4)) >= 1) {
                        checksum4 = checksum4 + 1;
                    }
                    if (checksum4 === 3) {
                        paschanger = 1;
                        checksum4 = 0;
                        let celluledroitestring = `.line${ligne}.col${colonneplus}.cell`;
                        let celluledroite = document.querySelector(celluledroitestring);
                        if (joueuractif === 1) {
                            celluledroite.style.backgroundColor = "red";
                            scorePlayerA++;
                        } else {
                            celluledroite.style.backgroundColor = "blue";
                            scorePlayerB++;
                        }
                    }
                }
            }
        }
        if (scorePlayerA === scorePlayerB) {
            cadrePlayerA.style.fontSize = "3rem";
            cadrePlayerA.style.boxShadow = "red 1px 1px 5px";
            cadrePlayerA.style.fontWeight = "900";
            cadrePlayerB.style.fontWeight = "900";
            cadrePlayerB.style.fontSize = "3rem";
            cadrePlayerB.style.boxShadow = "blue 1px 1px 5px";
        }
        if (scorePlayerA > scorePlayerB) {
            cadrePlayerA.style.fontSize = "4rem";
            cadrePlayerA.style.boxShadow = "red 2px 2px 5px";
            cadrePlayerA.style.fontWeight = "900";
            cadrePlayerB.style.fontWeight = "600";
            cadrePlayerB.style.fontSize = "3rem";
            cadrePlayerB.style.boxShadow = "black 2px 2px 5px";
        }
        if (scorePlayerA < scorePlayerB) {
            cadrePlayerB.style.fontSize = "3rem";
            cadrePlayerB.style.boxShadow = "black 2px 2px 5px";
            cadrePlayerB.style.fontWeight = "900";
            cadrePlayerA.style.fontWeight = "600";
            cadrePlayerA.style.fontSize = "4rem";
            cadrePlayerA.style.boxShadow = "red 2px 2px 5px";
        }
        cadrePlayerA.textContent = scorePlayerA;
        cadrePlayerB.textContent = scorePlayerB;
        if (paschanger == 0) {
            changeplayers();
        }
        paschanger = 0;

        console.log("tir ", tir);
        if (scorePlayerA > scorePlayerB) {
            winp1.textContent = " P1 Winner";
        } else {
            winp1.textContent = " P2 Winner";
        }
        if (tir === 195) {
            winp1.style.visibility = "visible";
        } else {
            winp1.style.visibility = "hidden";
        }

    }

}
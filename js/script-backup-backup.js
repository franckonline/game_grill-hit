window.onload = () => {

    let joueuractif = "1";
    document.querySelector(".bip").addEventListener("click", checkpass);
    let scorePlayerA = 0;
    let scorePlayerB = 0;
    let cadrePlayerA = document.querySelector(".playerA");
    let cadrePlayerB = document.querySelector(".playerB");
    console.log("cadrePlayerA: ", cadrePlayerA);
    console.log("cadrePlayerB: ", cadrePlayerB);
    let zones = document.querySelectorAll(".bip");
    let nbrShoot = zones.length - 1;

    zones.forEach(element => {
        element.addEventListener('click', checkpass)
    });
    document.querySelector(".shoot").innertext = nbrShoot;
    // console.log("ici c'est la zone : ", zones);

    function checkpass() {

        // définir maPosition du clic
        let unautre = this.classList;
        console.log("unautre >>> ", unautre);
        // définir la couleur de mon trait cliqué
        let maCouleurClic = unautre[4].slice(4);
        console.log("macouleurclic <=> ", maCouleurClic);
        // définir la colonne de mon trait cliqué
        let maColonne = unautre[2].slice(3);
        console.log("maColonne", maColonne);
        // définir la ligne de mon trait cliqué
        let maLigne = unautre[1].slice(4);
        console.log("maLigne", maLigne);

        if (unautre[0] == "trait" && maLigne !== 1 && maCouleurClic == 0) {
            
            console.log("c'est un trait");
            // -------------------  partie superieur  ----------------------
            
            // preparation des variables
            // variable ligne clicquable superieur ligne actuel - 2
            let ligneDessus = maLigne - 2;
            
            let verticauxGauche = unautre[2] - 1;
            let verticauxDroit = unautre[2] + 1;
            let ligneDecell = unautre[1] - 1;
            if (ligneDessus <= 1) {
                ligneDessus = 1;
                // si le clique etait déjà sur ligne 1 alors ligne dessus = 1
            }
            
            //si ligne superieur != 1
            if (ligneDessus !== 1) {
                let elementGauchevar = `.trait.line${ligneDessus}.col${maColonne}.bip`;
                //detection couleur ==coul0== si = coul0 alors injection coul{joueurActif}----
                elementGauche = document.querySelector(elementGauchevar);
                
                let elementDessus = elementGauche.textContent;
                
                if (joueuractif === 1) {
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
                    }
                    
                }
                
                
                // -----------------------cette ligne est à conserver ! ! !------------------
                // elementGauche.classList.replace("coul0", "coul3");

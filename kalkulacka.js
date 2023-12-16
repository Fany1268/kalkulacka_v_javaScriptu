        /*
        function secti() {
            alert(cislo1.value + cislo2.value);
        }
        
        Funkce sčítá inputy jako textové řetězce. "10" + "20" tedy vypíše "1020" ne jako 30. 
        Využijeme tedy funkce parseInt(), která nám text převede na číslo.

        // využijeme funkce parseInt(), která nám text převede na číslo.

        function secti() {
            alert(parseInt(cislo1.value) + parseInt(cislo2.value));
        } 
              
        Kdykoliv se v aplikaci něco stane, uživatel něco někam zadá,
        někam klikne, JavaScript začne spouštět tzv. obsluhy událostí. Události nalezneme 
        jako vlastnosti na jednotlivých elementech z DOM, začínají vždy na on, 
        např. onclick je událost kliknutí.
                
        tlacitko.onclick = secti;//A onclik si vybereme na našem tlačítku a uložíme do ní naši 
        //funkci secti() a ta se spustí, když se na tlačítko klikne.
        */

        window.onload = function() {
            let tlacitko = document.getElementById("tlacitko");
            let cislo1 = document.getElementById("cislo1");
            let cislo2 = document.getElementById("cislo2");
                    
            tlacitko.onclick = function() {
                alert(parseInt(cislo1.value) + parseInt(cislo2.value));
            };
        } 
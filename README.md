# MASA-kalendarz
Organizer do planowania dnia, udostępniania wydarzeń i zapraszania do nich innych użytkowników. Stworzony w ramach zajęć zaocznych AIUI na Politechnice Gdańskiej.
Realizacja projektu odbywała się w sprintach scramowych.
* planowanie(niedziela)
* sprint(iteracja) w wolnym czasie po godzinach prace nad kodem.(1-3 tygodni pomiędzy zjazdami)
* krótkie podsumowanie postępu(daily) przez skype/slack 2-3 razy w sprincie do kolejnego zjazdu
* prezentacja projektu na danym etapie(review), uzupełnienie backlogu, retrospekcja co się udało, a co nie i jak to poprawić (sobota)

## Wybrane Funkcjonalności
* zapis na wydarzenia upublicznione
* druk listy osób zapisanych
* komentowanie wydarzeń przez osoby odwiedzające serwis i moderatora wydarzenia(dialog)
* prezentacja pogody w dniu planowanego wydarzenia(API pogodowe)
* prezentacja na mapie miejsca dojazdu(API)
* logowanie poprzez konto google(API)
* tworzenie prywatnych wydarzeń(planer dnia/miesiąca/roku)
* kategoryzacja wydarzeń
* powiadomienia o zbliżającym się wydarzeniu z możliwością edycji

## Technologie
* frontend:   angular2 (angular-cli), sass, komunikacja z JSON API, testy e2e w Protractor, Webpack, JQUERY, Twitter Bootstrap i inne.
* backend:    phalcon, php, mysql, wystawienia JSON API
* inne:       API pogodowe, API map, API logowania, Photoshop

## Status z budowania
niedostępny

## Link do opisu projektu
https://github.com/azielazny/MASA-kalendarz/blob/develop/assets/polibuda-opis.pdf

## Link do testów E2E
Nagranie dostępne na YT z testów E2E stworzonych na szybko na jedne z zajęć:
https://youtu.be/A5qdMIGOoOw

(wady: brak dokładnego podziału na komponenty, nie ma postawionej bazy testowej)
Trzeba było wybrać. Dowieźć na sprint funkcjonalność lub nieplanowane testy.

## Zespół
* Mateusz Labuda
* Arkadiusz Zielazny
* Szymon Oracki

## Projekty zależne
* MASA-backend postawiony w Phalconie, Mysql, PHP7 (technologia wybrana do postawienia bazy danych i wygenerowania API ze względu na znajomość PHP)

## Informacje uzupełniające 
Kopia wybranych elementów z Wiki z GITLABa została przeniesiona na Wiki GITHUBa

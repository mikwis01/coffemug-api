________________________
Dostępne routy:
________________________


  - [GET] /ping - Sprawdzenie czy API działa
  - [GET] /product/get - Lista wszystkich produktów
  - [GET] /product/get/:productId - Szczegóły produktu (konkretny produkt)
  - [POST] /product/create - Utworzenie produktu ({name: "String - długość od 1 do 100, wymagany", price: "Number większy równy 0, wymagany"})
  - [PUT] /product/update/:productId - Aktualizacja konkretnego produktu ({name: "String - długość od 1 do 100, wymagany", price: "Number większy równy 0, wymagany"})
  - [DELETE] /product/delete/:productId - Usunięcie konkretnego produktu ({name: "String - długość od 1 do 100, wymagany", price: "Number większy równy 0, wymagany"})


________________________

Instrukcje uruchomienia:
________________________

Instalacja niezbędnych pakietów:
  - npm i

Build (Użyć terminalu BASH):

  - npm run build
  
Start serwera:

  - npm start
  
  
UWAGA: Plik .env dodany w celu udostępnienia możliwości pełnego wglądu w kod
________________________

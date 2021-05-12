# Rum&Code Avebger challenge

This project is for a code challenge for an interview at Rum&Code.

I had to create a catalog of Avengers superheroes.  It had to contains.
* List of avengers superheroes including:
  * Superhero name
  * Real first name
  * Real last name
  * Status
* Descriptive page of the superhero including:
  * Superhero name
  * Real first name
  * Real last name
  * Age
  * Short description
  * Status

## Requirements 
* Docker desktop engine (https://www.docker.com/products/docker-desktop)
* A web browser

## To run the project
1. Clone the repo `git clone https://github.com/mtrepanier/rumandcode_challenge.git && cd ./rumandcode_challenge` 
2. Build the project - `make build`
3. Seed the database - `make seed_db`
4. Start the project - `make start`
5. Stop the project - `make stop`

## Maintenance
### Rubocop
For code cleanup and formatter
* make cleanup

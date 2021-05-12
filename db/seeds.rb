# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
SuperHero.create(
  [
    { hero_name: 'Some random hero', firstname: 'Bob', lastname: 'Pernod', active: false },
    { hero_name: 'Some great hero', firstname: 'Jean', lastname: 'Bon', active: true },
    { hero_name: 'SplunkMan', firstname: 'Splunk', lastname: 'Log', active: false },
    { hero_name: 'Hero sup', firstname: 'Jeremy', lastname: 'Voyer', active: true },
    { hero_name: 'PrincessLea', firstname: 'Lea', lastname: 'Dog', active: false },
    { hero_name: 'Vardoche', firstname: 'Fardoche', lastname: 'Varlamov', active: true },
    { hero_name: 'Pandemic Man', firstname: 'Co', lastname: 'Video', active: false },
    { hero_name: 'The great rusty', firstname: 'Donald', lastname: 'Trompette', active: true },
    { hero_name: 'Lays man', firstname: 'Mark', lastname: 'Messier', active: true },
    { hero_name: 'Subdiva', firstname: 'Varda', lastname: 'Mathieu', active: true },
  ]
)

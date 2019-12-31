# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'rest-client'
CharacterSpell.destroy_all
Character.destroy_all
House.destroy_all
Spell.destroy_all

charResponse = RestClient.get("http://hp-api.herokuapp.com/api/characters/")
charResult = JSON.parse(charResponse)

houseResponse = RestClient.get("http://hp-api.herokuapp.com/api/characters/")
houseResult = JSON.parse(charResponse)

spellResponse = RestClient.get("https://raw.githubusercontent.com/bukinoshita/harry-potter-spells/master/spells.json")
spellResult = JSON.parse(spellResponse)

houseResult.each do |house|   
    House.find_or_create_by(
        name: house["house"]
    ).characters.create( 
        name: house["name"],
        ancestory: house["ancestry"],
        image: house["image"]
    )
end
# binding.pry
# y = House.all.map{|spell| spell.name}.uniq
# y.reject{|e| e.to_s.empty?}
    spellResult.map do |spell|
    Spell.create(
        name: spell["name"],
        kind: spell["type"],
        effect: spell["effect"],
        counter_spell: spell["counter-spell"]
    )
    end



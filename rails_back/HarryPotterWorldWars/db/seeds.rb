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


charResponse = RestClient.get("https://www.potterapi.com/v1/characters/?key=$2a$10$j0G65h3rRbsYHsrU/2B83O.E0f7/iycXfakmkydoXGxLLF6wsJmmq")
charResult = JSON.parse(charResponse)

spellResponse = RestClient.get("https://raw.githubusercontent.com/bukinoshita/harry-potter-spells/master/spells.json")
spellResult = JSON.parse(spellResponse)

spellResult.map do |spell|
    Spell.create(
        name: spell["name"],
        kind: spell["type"],
        effect: spell["effect"],
        counter_spell: spell["counter-spell"]
    )
end

charResult.each do |character|
    if character["role"] == "student"
        House.find_or_create_by(
            name: character["house"]
        ).characters.create( 
            name: character["name"],
            ancestry: character["blood-status"]
        )
        25.times.map do |i|
            CharacterSpell.find_or_create_by(spell_id: rand(1..93), character_id: rand(1..33))
        end
    end
end

binding.pry






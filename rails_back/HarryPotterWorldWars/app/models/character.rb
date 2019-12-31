class Character < ApplicationRecord
    belongs_to :house
    has_many :character_spells
    has_many :spells, through: :character_spells
end

class Character < ApplicationRecord
    belongs_to :house
    has_many :character_spells, dependent: :destroy
    has_many :spells, through: :character_spells

    def spell_id=(id)
        spell = Spell.find(id)
        self.spells << spell
    end

    # def house_id=(id)
    #     house = House.find(id)
    #     self.houses << house
    # end

    validates :name, presence: true
    validates :name, uniqueness: {case_sensitive: false}
    # validates :ancestry, presence: true
end

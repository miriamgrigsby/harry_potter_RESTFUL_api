class Character < ApplicationRecord
    belongs_to :house
    has_many :character_spells
    has_many :spells, through: :character_spells

    def spell_id=(id)
        spell = Spell.find(id)
        self.spells << spell
    end

    validates :name, presence: true
    validates :name, uniqueness: {case_sensitive: false}
    # validates :blood-status, presence: true
end

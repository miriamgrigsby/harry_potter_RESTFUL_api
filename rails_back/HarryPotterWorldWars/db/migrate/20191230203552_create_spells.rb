class CreateSpells < ActiveRecord::Migration[6.0]
  def change
    create_table :spells do |t|
      t.string :name
      t.string :kind
      t.string :effect
      t.string :counter_spell

      t.timestamps
    end
  end
end

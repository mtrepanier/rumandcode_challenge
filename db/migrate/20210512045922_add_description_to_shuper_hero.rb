class AddDescriptionToShuperHero < ActiveRecord::Migration[6.1]
  def change
    add_column :super_heros, :description, :text
    add_column :super_heros, :age, :int
  end
end

class CreateSuperHeros < ActiveRecord::Migration[6.1]
  def change
    create_table :super_heros do |t|
      t.string :hero_name
      t.string :firstname
      t.string :lastname
      t.boolean :status

      t.timestamps
    end
  end
end

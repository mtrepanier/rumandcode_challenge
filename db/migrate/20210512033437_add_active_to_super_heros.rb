class AddActiveToSuperHeros < ActiveRecord::Migration[6.1]
  def change
    remove_column :super_heros, :status, :boolean
    add_column :super_heros, :active, :boolean
  end
end

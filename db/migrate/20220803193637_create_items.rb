class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :title
      t.string :image_url
      t.string :description
      t.integer :artist_id

      t.timestamps
    end
  end
end

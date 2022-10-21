class CreateTenants < ActiveRecord::Migration[7.0]
  def change
    create_table :tenants do |t|
      t.string :property_name
      t.string :tenant_name
      t.string :unit_name
      t.integer :phone_number
      t.integer :deposit
      t.integer :balance
      t.integer :account_number
    end
  end
end

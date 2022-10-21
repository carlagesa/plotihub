class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.datetime :date
      t.string :property_name
      t.integer :payment_number
      t.string :tenant_name
      # t.string :unit_name
      # t.string :status
      t.integer :paid_amount

    end
  end
end

class User < ApplicationRecord
    validates :username, presence: true, uniqueness: 
    has_secure_password
    has_many :properties
    has_many :tenants, through: :properties, source: :tenants
    has_many :payments 
end

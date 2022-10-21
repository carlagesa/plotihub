class Utility < ApplicationRecord
    # belongs_to :tenant
    # belongs_to :property
    belongs_to :user
    validates :utility_item, presence: true
    validates :date, presence: true

end

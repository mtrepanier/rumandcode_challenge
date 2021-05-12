class SuperHero < ApplicationRecord
  validates :hero_name, presence: true

  scope :by_active, lambda { |state| where(["super_heros.active=?", state]) }

  def self.search(search)
    if search
      q = "%#{search}%"
      where('lower(hero_name) LIKE ?', q.downcase)
    else
      scoped
    end
  end
end

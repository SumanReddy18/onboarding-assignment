require 'securerandom'

class Dice
  def initialize(number)
    @dice = Array.new(number) { SecureRandom.random_number(6) + 1 }
  end

  def values
    @dice
  end
end

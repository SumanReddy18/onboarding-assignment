class Player
  attr_accessor :name, :score

  def initialize(name)
    @name = name
    @score = 0
    @can_accumulate_score = false
  end

  def take_turn(is_final_turn = false)
    round_score = 0
    non_scoring_dice = []
    has_scored = false

    loop do
      dice = Dice.new(non_scoring_dice.empty? ? 5 : non_scoring_dice.length)
      dice_roll = dice.values
      puts "#{name}'s turn:"
      puts "Rolls: #{dice_roll.join(', ')}"

      dice_counts = Hash.new(0)
      dice_roll.each { |die| dice_counts[die] += 1 }
      score = calculate_score(dice_counts)

      if score == 0
        puts "Bust! You lose your turn's points."
        round_score = 0
        break
      end

      has_scored = true
      round_score += score
      puts "Score this round: #{score}"
      puts "Total score: #{@score + round_score}"

      # Scoring dice
      scoring_dice_counts = Hash.new(0)
      dice_counts.each do |die, count|
        if (die == 1 && count > 0) || (die == 5 && count > 0) || count >= 3
          scoring_dice_counts[die] = count
        end
      end

      # Non-scoring dice
      non_scoring_dice = dice_roll.select do |die|
        !scoring_dice_counts.key?(die)
      end

      if non_scoring_dice.any?
        if is_final_turn
          print "Do you want to roll the non-scoring #{non_scoring_dice.length} dice? (y/n): "
        else
          print "Do you want to roll the non-scoring #{non_scoring_dice.length} dice? (y/n): "
        end
        roll_again = gets.chomp.downcase == 'y'
      else
        roll_again = false
      end

      break unless roll_again
    end

    # Add round_score to player's total score if the player scored at least once in this turn
    if has_scored
      if round_score >= 300 || @can_accumulate_score
        @can_accumulate_score = true
        @score += round_score
      else
        puts "#{name} didn't score 300 points yet. The score won't accumulate."
      end
    end
  end

  private

  def calculate_score(dice_counts)
    score = 0

    SCORING_RULES.each do |die, values|
      count = dice_counts[die] || 0
      if count >= 3
        score += values[:three]
        count -= 3
      end
      score += count * values[:one] if values[:one]
    end

    score
  end
end

SCORING_RULES = {
  1 => { three: 1000, one: 100 },
  2 => { three: 200 },
  3 => { three: 300 },
  4 => { three: 400 },
  5 => { three: 500, one: 50 },
  6 => { three: 600 }
}

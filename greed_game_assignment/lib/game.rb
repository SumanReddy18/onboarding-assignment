class Game
    def initialize(player_names)
      @players = player_names.map { |name| Player.new(name) }
      @current_player_index = 0
      @game_over = false
      @final_turn = false
      @winner = nil
    end
  
    def play
      until game_over?
        if @final_turn
          # Give each player one final turn if the final turn is triggered
          @players.each do |player|
            next if player == @winner
  
            puts "#{player.name}'s final turn:"
            player.take_turn(true) # Final turn
          end
          @game_over = true # End the game after all final turns are complete
        else
          current_player.take_turn
          check_for_winner
          switch_to_next_player
        end
      end
  
      # Display final scores and determine the winner
      puts "Game over! Final scores:"
      @players.each { |player| puts "#{player.name}: #{player.score}" }
      determine_winner
    end
  
    private
  
    def current_player
      @players[@current_player_index]
    end
  
    def switch_to_next_player
      @current_player_index = (@current_player_index + 1) % @players.length
    end
  
    def check_for_winner
      if @winner.nil?
        @winner = @players.find { |player| player.score >= 3000 }
        if @winner
          puts "#{@winner.name} reached 3000 points! Other players get one last turn."
          @final_turn = true
        end
      end
    end
  
    def game_over?
      @game_over
    end
  
    def determine_winner
      highest_score = @players.map(&:score).max
      winners = @players.select { |player| player.score == highest_score }
  
      if winners.size == 1
        puts "#{winners.first.name} wins!"
      else
        puts "It's a tie!"
      end
    end
  end
  
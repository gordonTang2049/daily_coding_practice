# stragic on making up the word 


def can_make_word(word)
  chars = word.upcase.split('')
  chars.each do |char|
    
    letter_blocks.each do |block|
      if block.include? char
        block.push(true)
      elsif
        block.include? true
        return false
      end
    end 
    # delete_at / true
  end 

  return true 
end 

result = can_make_word('A')
puts result

# p letter_blocks 
# letter_blocks.any? {|n| puts n.class 
#   n == 'O'}
  
# end
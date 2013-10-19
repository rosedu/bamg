fis="dict"
echo -n "var wordList = [" > $fis
while read a b
do
    echo -n "[\"" >> $fis
    echo -n $a >> $fis
    echo -n "\", \"" >> $fis
    echo -n $b >> $fis
    echo -n "\"], " >> $fis
done < temp
echo -n "];" >> $fis

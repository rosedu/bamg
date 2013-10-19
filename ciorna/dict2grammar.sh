#!/bin/bash/

gram="grammarProba"

echo -n "var grammarProba = {numStates: 1, start: 0, end: 0, transitions: [" > $gram
dict=$(cat dict | tr ", " "\n" | grep -E '\[\"' | tr -d '\[\"')
for word in $dict;
do
    echo -n "{from: 0, to: 0, word: \"" >> $gram
    echo -n $word >> $gram
    echo -n "\"}, " >> $gram
done

echo -n "]};" >> $gram

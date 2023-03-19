package main

type WordDictionary struct {
    children [26]* WordDictionary
    isWord bool
    
}


func Constructor() WordDictionary {
    return WordDictionary{}
}


func (this *WordDictionary) AddWord(word string)  {
    root := this
    
    for _,item := range word{
        char := item - 'a'
        
        if root.children[char] == nil {
            root.children[char] = &WordDictionary{}
        }
        root = root.children[char]
    }
    root.isWord = true
    
}


func (this *WordDictionary) Search(word string) bool {
    root := this
    for i,item := range word{
        if word[i] == '.'{
            for _,item := range root.children{
                if item != nil && item.Search(word[i+1:]) {
                    return true
                }
            }
            
            return false
        }
        
        char := item - 'a'
        if root.children[char] == nil{
            return false
        }
        root = root.children[char]
    }
    
    return root.isWord
}

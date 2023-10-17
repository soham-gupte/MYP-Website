// 1 <- 2 <- 3  4 -> 5-> 6
// 3 2 1 6 5 4
// curr, next, prev
// i = 1 
// curr->next = prev
// prev = curr
// curr = next
// i++
// prev_temp = 1

void func() {
    // 1 2 3 4 5 6
    // 3 2 1 4 5 6
    // 3 2 1   6 5 4
    int k = 3;
    node* curr = head;
    if (!head->next) return;
    node* prev = NULL;
    node* next = head->next;
    // prev_temp = NULL;
    while (curr) {
        for (int i=1; i<k; i++) {
            curr->next = prev;
            prev = curr;
            curr = next;
            next = next->next;
        }
        temp = curr;
        while (temp->next) {
            temp = temp->next;
        }
        prev->next = temp;
    }
}
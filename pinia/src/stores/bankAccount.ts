export const useBankAccountStore = defineStore('bankAccount', {
    state: () => {
        return {
            balance: 0,
            transactions: [],
            
        }
    }
})
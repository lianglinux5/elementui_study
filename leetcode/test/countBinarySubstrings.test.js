import substr from "../countBinarySubstrings_696"

test(`substr("00110011")`,()=>{
    expect(substr('00110011')).toEqual(["0011","01","1100","10","0011","01"])
})


test(`substr("10101")`,()=>{
    expect(substr('10101')).toEqual(["10","01","10","01"])
})
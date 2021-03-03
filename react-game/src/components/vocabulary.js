const vocabulary ={
  ru:{
    newGame:'Новая игра',
    continue:"Продолжить",
    back:"Назад",
    settings:"Настройки",
    autoplay:"Автопроигрывание",
    moves:"Ходы",
    playerMessageTemplate:"ходит сейчас",
    tieMessageTemplate:'Это ничья!',
    winMessage:"победил!",
    table:{
      tableHeader:['№','Победитель',"Ходы"],
      tableMessage:'Пока нет данных',
    },
    settingsOptions:{
      theme:{
        title:'Тема',
        options:['светлая','темная']
      },
      startAs:{
        title:'Начинать как',
        options:['X','O']
      },
      lang:{
        title:'Язык',
        options:['en','ru']
      },
    }
  },
  en:{
    newGame:'New game',
    continue:"Continue",
    back:"Back",
    settings:"Settings",
    autoplay:"Autoplay",
    moves:"Moves",
    playerMessageTemplate:"player turn",
    tieMessageTemplate:"It's a tie!",
    winMessage:"wins!",
    table:{
      tableHeader:['№','Winner',"Moves"],
      tableMessage:'No data yet',
    },
    settingsOptions:{
      theme:{
        title:'Theme',
        options:['light','dark']
      },
      startAs:{
        title:'Start as',
        options:['X','O']
      },
      lang:{
        title:'Language',
        options:['англ','рус']
      },
    }
  }
}
export default vocabulary;
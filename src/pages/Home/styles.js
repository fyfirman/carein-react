import SPACING from '../../theme/Spacing';

module.exports = {
  root:{
    marginHorizontal:16
  },
  textSubHeading:{
    color: 'rgba(6, 44, 60, 0.9)',
    fontSize: 14,
    fontWeight:'bold'
  },
  textSubHeadingAll:{
    fontSize: 14 ,color:'rgba(6, 44, 60, 0.9)'
  },
  subtitle:{
    flexDirection: 'row',
    marginTop:22,
    marginBottom:'7%', 
    justifyContent: 'space-between'
  },
  
  card:{
    marginHorizontal:16,
    overflow: 'hidden', 
    paddingBottom:  5,
    paddingRight:5,
    borderRadius:24,
  },
  bundle:{
    backgroundColor: '#fff',
    shadowColor: '#000',
    width:'auto',
    height:106,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.2,
    shadowRadius: 1,
    elevation: 5,
    borderRadius:24
  },
  subcard:{
    marginHorizontal:15,
    alignSelf:'flex-start'
  },
  subcardBundle:{
    marginHorizontal:13
  },
  textSubcard:{
    color: 'rgba(6, 44, 60, 0.9)', 
    fontWeight: 'bold', 
    fontSize: 18 
  },
  subtextSubcard:{
    color: 'rgba(6, 44, 60, 0.9)', 
    fontSize: 12 
  },
  doneSubcard:{
    color: 'rgba(6, 44, 60, 0.9)',
    fontSize: 14,
    paddingLeft:'-5%'
  },
  doneInfoSubcard:{
    color: 'green',
    fontSize: 14,
    fontWeight: '600'
  },
  img:{
    width:78,
    height:78,
    borderRadius:10
  },

  noTransSubcard:{
    textAlign: 'center',
    marginHorizontal: '12%',
    color: 'grey',
    fontSize: 18,
    alignSelf:'center',
  },

  textBundle:{
    flexDirection:'column',
    flex:1,
    justifyContent:'center'
  },
  chat:{
    backgroundColor:'#497CFB',
    borderRadius:8,
    height:35,
    width:66, 
    marginBottom:'-90%'
  },
  chatBundle:{
    alignSelf:'center',
    marginRight:'-10%'
  },
  chatText:{
    fontSize:14,
    paddingTop:'5%',
    paddingBottom:'5%', 
    color:'white',
    textAlign:'center',
  },
  chatTextBundle:{
    paddingLeft:'30%',
    paddingRight:'30%'
  },
  feature:{
    marginTop:30
  },
  content: {
    backgroundColor: 'green'
  },

  cardContainer: {
    marginTop:'5%',
    height: '75%',
    paddingLeft: SPACING.PADDING_HORIZONTAL,
    paddingRight: SPACING.PADDING_HORIZONTAL
  }
};

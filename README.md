# nepali-english-dateconverter-js
Converts nepali date to english date and vice versa

#### Usage

1. Link the script inside HTML file.
2. To convert AD to BS , call the method ToBS

        ToBS(request,responseFormat) 

3. To convert BS to AD , call the method ToAD

        ToAD(request,responseFormat)

**First parameter  : request object containing the detail in which date to be converted is passed. For the format value, see the available date formats.**

      {
       date : 'date to be converted',
       format : 'yMd'
      };
**Second parameter (optional) : format in which data is to be returned. dateFormat defaults to 'yMd' and separator defaults to '/' , if object is not passed in parameter. For dateFormat, see the available date formats and for separator value, see the available separators section**

    {
     dateFormat : 'yMd',
     separator : '/'
    }

**Available Date Formats :** Following are the available date formats :
1. **yMd** 
2. **Mdy**
3. **dMy**

**Available Separators :** Following are the available separators :

1. **Forward slash (/)**
2. **Dash (-)**
3. **WhiteSpace ( )**

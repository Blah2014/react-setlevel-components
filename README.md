# react-setlevel-components

# Installation
```
$ npm i --save https://github.com/Blah2014/react-setlevel-components
```

# Grid

[Demo](https://blah2014.github.io/react-setlevel-components/demo/index.html)

![Grid](https://raw.githubusercontent.com/Blah2014/react-setlevel-components/master/demo/images/grid.png)

### Usage
```
import {
    GridRow,
    GridColumn
}  from 'react-setlevel-components';

-- or --

import {
     GridRow
}  from 'react-setlevel-components/lib/Grid/GridRow';
```

### GridRow
| Props | Options | Default | Required | Example |
| --- | --- | --- | --- | --- |
| style | --- | --- | NO | style={{color: '#ced2d5'}} |
| className | --- | --- | NO | className="text-light bg-dark" |
| collapsible | true, false | false | NO | collapsible={true} |
| verticalAlign | middle, bottom | top | NO | verticalAlign="middle" |
| horizontalAlign | center, right | left | NO | horizontalAlign="center" |
| overflow | auto | hidden | NO | overflow="auto" |
| overflowX | auto, hidden | --- | NO | overflowX="auto" |
| overflowY | auto, hidden | --- | NO | overflowY="auto" |

### GridRow example
```
<GridRow>
    <GridRow collapsible={true} className="text-light bg-dark">
        shrinking row
    </GridRow>
    <GridRow className="text-dark bg-light">
        growing row
    </GridRow>
</GridRow>
```

### GridColumn
| Props | Options | Default | Required | Example |
| --- | --- | --- | --- | --- |
| style | --- | --- | NO | style={{color: '#ced2d5'}} |
| className | --- | --- | NO | className="text-light bg-dark" |
| collapsible | true, false | false | NO | collapsible={true} |
| verticalAlign | middle, bottom | top | NO | verticalAlign="middle" |
| horizontalAlign | center, right | left | NO | horizontalAlign="center" |
| overflow | auto | hidden | NO | overflow="auto" |
| overflowX | auto, hidden | --- | NO | overflowX="auto" |
| overflowY | auto, hidden | --- | NO | overflowY="auto" |

### GridColumn example
```
<GridColumn>
    <GridColumn collapsible={true} className="text-light bg-dark">
        shrinking row
    </GridColumn>
    <GridColumn className="text-dark bg-light">
        growing row
    </GridColumn>
</GridColumn>
```

### Nested rows and columns examples
```
<GridRow>
    <GridRow collapsible={true} className="text-light bg-dark">
        shrinking row
    </GridRow>
    <GridRow className="text-dark bg-light">
        <GridColumn>
            <GridColumn collapsible={true} className="text-light bg-dark">
                shrinking row
            </GridColumn>
            <GridColumn className="text-dark bg-light">
                growing row
            </GridColumn>
        </GridColumn>
    </GridRow>
</GridRow>

-- or --

<GridColumn>
    <GridColumn collapsible={true} className="text-light bg-dark">
        shrinking row
    </GridColumn>
    <GridColumn className="text-dark bg-light">
        <GridRow>
            <GridRow collapsible={true} className="text-light bg-dark">
                shrinking row
            </GridRow>
            <GridRow className="text-dark bg-light">
                growing row
            </GridRow>
        </GridRow>
    </GridColumn>
</GridColumn>
```
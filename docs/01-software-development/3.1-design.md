# Design

!!! info "What You Need to Know"

    For Higher Software Design and Development, you must be able to:

    - identify suitable **data types** and **data structures**
    - read and create designs using **structure diagrams** and **pseudocode**
    - show the **top-level design**
    - show the **data flow** in and out of sub-programs
    - show **refinements** where more detail is needed
    - design user interfaces using **wireframes**

Design is the planning stage of software development. It turns the analysis into a clear plan for how the solution will be built.

In the Higher assignment, candidates are expected to produce design documentation before implementation begins. Good design helps ensure that the final solution meets all functional requirements and makes the implementation stage easier.

At Higher level, design is mainly about answering four questions:

| Question | Design feature |
|---|---|
| What are the main parts of the solution? | Top-level design |
| What information is passed between those parts? | Data flow |
| How does each main part work? | Refinements |
| What data and interface will the program use? | Data types, structures, and wireframes |

## Turning Analysis into Design

Analysis describes the problem by identifying the:

- purpose
- scope
- boundaries
- functional requirements
- inputs, processes, and outputs

Design uses this information to plan how the solution will be organised and built.

For example, if the analysis says a program must read pupil marks, calculate percentages, find the highest percentage, and display the result, these requirements can become top-level design steps:

| Step | Top-level design |
|---|---|
| 1 | Get results |
| 2 | Calculate percentages |
| 3 | Find position of pupil with top mark |
| 4 | Display pupil with top mark |

These main steps form the **top-level design**. Later, data flow and refinements are added to make the design detailed enough to implement.

## Modular Design

A **module** is a section of a program that carries out one clear task.

Each module should perform one specific task. This makes the design easier to understand, test, and maintain.

Breaking a program into modules makes it easier to:

- implement
- test
- debug
- maintain
- improve later

In the final program, modules are usually implemented as procedures or functions.

## Higher Design Techniques You Need to Know

| Technique | Best for showing | Commonly used for |
|---|---|---|
| **Structure diagram** | The modular breakdown of the program | Top-level design |
| **Pseudocode** | The algorithmic steps and refinements | Refinements and algorithms |
| **Wireframe** | The layout of the user interface | Screen and interface design |

Structure diagrams and pseudocode can both show top-level design, data flow, and refinements. They simply present the same design information in different ways.

## Worked Design Example

The example below shows how a simple requirement develops into a design that is ready to implement.

| Design stage | Example |
|---|---|
| Analysis requirement | Calculate and display the average test score |
| Top-level design | `1 Get scores`<br>`2 Calculate average`<br>`3 Display average` |
| Data flow | `GetScores() -> scores`<br>`CalculateAverage(scores) -> average`<br>`DisplayAverage(average)` |
| Refinement | `FOR count <- 1 TO 3`<br>`    INPUT score[count]`<br>`END FOR` |

The top-level design gives the main modules, the data flow shows what each module passes on, and the refinement adds detail for one module.

## Data Types and Data Structures

Once the main design is clear, you should choose suitable data types and structures.

These choices affect validation, storage, and how easily the data can be processed.

| Data item | Suitable type or structure | Reason |
|---|---|---|
| Pupil name | String | Stores text |
| Test score | Integer | Stores a whole number |
| Product price | Real | Stores a decimal number |
| Login successful | Boolean | Stores true or false |
| List of marks | Array of integers | Stores several related values |
| Customer details | Record | Stores different fields about one item |

!!! tip "Exam Tip"

    When asked to create a design, start with the **top-level design** first.

    Then add:

    - data flow
    - refinements
    - suitable data types and structures

    Building the design in this order makes it easier to ensure all functional requirements have been covered.

## Summary

Design turns the analysis into a clear plan for how the program will be built.

A good Higher design should show:

- the main modules in the solution
- the data that flows in and out of each module
- refinements for modules that need more detail
- suitable data types and data structures
- a clear user-interface design, where appropriate

By the end of the design stage, another programmer should be able to understand what the solution will do, how it is split into modules, and what data must move between those modules.

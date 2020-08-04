use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct Counter {
    counter: i32
}

#[derive(Serialize, Deserialize)]
pub struct CounterProps {
    initial: i32
}

#[allow(non_camel_case_types)]
#[derive(Serialize, Deserialize)]
pub enum CounterAction {
    increment(i32),
    decrement(i32),
    double
}

impl Default for Counter {
    fn default() -> Self {
        Counter {
            counter: 42
        }
    }
}

impl Lifecycle<CounterProps, Counter> for Counter {
    fn on_mount(props: CounterProps, state: Counter){

    }
}
impl Reducer<Counter, CounterAction> {
    fn reduce(state: Counter, action: CounterAction) -> Counter {
        match action {
            CounterAction::increment(i) => CounterState {
                counter: state.counter + i
            },
            CounterAction::decrement(i) => CounterState {
                counter: state.counter - i
            },
            CounterAction::double => CounterState {
                counter: state.counter * 2
            }
        }
    }
}

export!(Counter, CounterAction)
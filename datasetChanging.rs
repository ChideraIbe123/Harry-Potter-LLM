use std::fs::File;
use std::io::{self, Read, Write};

fn main() -> io::Result<()> {
    // Specify the file paths
    let input_path = "Harry_Potter_all_char_separated.txt";
    let output_path = "output.txt";

    // Read the input file
    let mut file = File::open(input_path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;

    // Replace every '|' with "|\n" (pipe followed by a newline)
    let processed_contents = contents.replace("|", "|\n");

    // Write the processed contents to a new file
    let mut output_file = File::create(output_path)?;
    output_file.write_all(processed_contents.as_bytes())?;

    println!("The file has been processed and saved as '{}'", output_path);
    Ok(())
}

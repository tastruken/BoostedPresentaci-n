with open(r"c:\Users\tastr\Desktop\PRESENTACION BOOSTED\style.css", encoding="utf-8") as f:
    for idx, line in enumerate(f, 1):
        if "isometric-container" in line or "isometric" in line:
            print(f"style.css:{idx}: {line.strip()}")

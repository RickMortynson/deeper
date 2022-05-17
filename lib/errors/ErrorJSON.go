package errors

type Error struct {
	Title string `json:"title,omitempty"`
	Desc  string `json:"desc,omitempty"`
	Code  int    `json:"code,omitempty"`
}

type OptionalArgs struct {
	Desc string
	Code int
}

func ErrorJSON(title string) Error {
	return Error{
		Title: title,
	}
}

func ExtErrorJSON(title string, args *OptionalArgs) Error {
	return Error{
		Title: title,
		Desc:  args.Desc,
		Code:  args.Code,
	}
}

//
// Code generated by go-jet DO NOT EDIT.
//
// WARNING: Changes to this file may cause incorrect behavior
// and will be lost if the code is regenerated
//

package model

type Places struct {
	ID                string `sql:"primary_key"`
	Type              string
	SubType           *string
	Name              string
	Description       *string
	Accessibility     int32
	AccessibilityNote *string
	Capacity          *int32
	CapacityNote      *string
	Phones            *string
	Web               string
	Okres             string
	Obce              string
	Address           string
	Point             *string
	LikeCount         int32
	Lat               *float64
	Lon               *float64
}
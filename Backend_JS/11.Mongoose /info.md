Let's face it, writing MongoDB validation, casting and business logic boilerplate is a drag. That's why we wrote Mongoose.
it is used for schema defintion as in mongodb there is no set schema and it allows any type of data 
by using mongoose we can set schema so that data which is not following this cant be added to the db 

By default, Mongoose does not enforce the presence of fields unless they are marked as required.
Your schema allows age and profession to be optional because they are not marked as required.
If you want to enforce that certain fields must be present, you can use the required property in your schema.
MongoDB itself is schema-less, so it doesn't enforce any structure. Mongoose adds schema validation, but it is lenient by default.

if  required fieds not present this shows a validation error 